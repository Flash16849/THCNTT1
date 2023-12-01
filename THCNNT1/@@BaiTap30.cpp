//Bai tap 30, dung file text de quan ly sach

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>
#include <string.h>


typedef struct BOOK{
	int id;
	char name[15];
	int quantity;
}book;

book b[100];
int n = -1;//Bien nay la so thu tu cua cac phan tu duoc them vao mang b, se tang dan moi khi mot phan tu nao do duoc them vao


void add(FILE *f){
	f = fopen("BookInformation.txt", "a");
	
	if(f == NULL){
		printf("Failed to open");
	}
	else{
		n++;
	
		srand(time(NULL));
		b[n].id = rand() % 1001; //Chay random cho gia tri cua id
		
		//Ten sach va so luong do nguoi dung nhap
		printf("Ten sach: ");
		fflush(stdin);
		scanf("%s", &b[n].name);
		printf("So luong: ");
		fflush(stdin);
		scanf("%d", &b[n].quantity);
		
		//Du lieu duoc luu vao file text
		fprintf(f, "%10d\t|\t%-15s\t|\t%-5d\n", b[n].id, b[n].name, b[n].quantity);	
	}
	
	fclose(f);
}

//Ham read de trong truong hop chuong trinh moi chay thi mang b rong trong khi file ton tai san, dung ham nay de doc file va dua du lieu file vao mang b
bool read(FILE *f, int &n){
	f = fopen("BookInformation.txt", "r");
	int ordinalNum = -1; //So thu tu trong mang
	book temp[100];
	
	if(f == NULL){
		printf("Failed to open");
		return false;
	}
	else{
		while(!feof(f)){
			ordinalNum++;
			fscanf(f, "%d\t|\t%s\t|\t%d", &temp[ordinalNum].id, &temp[ordinalNum].name, &temp[ordinalNum].quantity);// Doc file ghi du lieu vao mang temp
		}
		
	//Sau do, gan gia tri tu mang temp vao mang b, nham muc dich loai bo hang \n duoc them vao o ham add()
		for(int i = 0; i < ordinalNum; i++){
			b[i] = temp[i];
		}
		

		n = ordinalNum-1;// Thay doi gia tri n (n global la so luong phan tu mang b), su dung trong cac ham ben duoi de printf cac gia tri mang b trong vong lap for
		return true;
	}
	
	fclose(f);
	 
}


void showInfo(FILE *f){
	bool check = true;
	
	if(b[0].id == NULL){
		check = read(f, n);
	}
	
	//Neu check true thi nghia la 1: mang b da co day du du lieu ngay tu dau, 2: Trong ham read, thanh cong mo file va doc du lieu file
	if(check != false){
		printf("%10s\t|\t%-15s\t|\t%-5s\n", "ID", "NAME", "QUANTITY");
		printf("--------------------------------------------------------\n");
		
		for(int i = 0; i <= n; i++){
			printf("%10d\t|\t%-15s\t|\t%-5d\n", b[i].id, b[i].name, b[i].quantity);
		}
	}
	
}


int findBook(FILE *f){
	char name[15];
		
	printf("Nhap ten sach can tim: ");
	scanf("%s", &name);
	
	if(b[0].id == NULL){
		read(f, n);
	}
	
	//Vong lap check neu tim ra thi in ra man hinh, khong thi thong bao khong tim thay
	for(int i = 0; i <= n; i++){
		if(strcmp(b[i].name, name) == 0){
			printf("%10d\t|\t%-15s\t|\t%-5d\n", b[i].id, b[i].name, b[i].quantity);
			return i;
		}
		if(i == n){
			printf("Khong ton tai sach ban dang tim.");
		}
	}
}


void deleteBook(FILE *f){
	
	book temp[100] = {};
	char choice = 'n';
	
	int toBeDeleteBookIndex = findBook(f); //Goi ham findBook de tim sach can xoa dua theo ten
	
	printf("Ban muon xoa thong tin cua sach nay?(y/n)");
	fflush(stdin);
	scanf("%c", &choice);
	
	if(choice == 'y'){
		f = fopen("BookInformation.txt", "w");
		int flag = 0;
		
		for(int i = 0; i <= n; i++){	
			if(i == toBeDeleteBookIndex){
				flag = 1;	
			}
			
	//Lien tuc gan gia tri tu mang b sang mang temp, neu flag = 1 (da chay toi phan tu can xoa), thi bat dau gan gia tri mang b vi tri i+1 vao mang temp vi tri i
		
			if(flag == 0){
				temp[i] = b[i];
			}
			else{
				temp[i] = b[i+1];
			}
		}
		
	//Sau khi hoan thanh mang temp, 1 phan tu bi xoa nen so luong phan tu se la n = n-1
		n--;
	//Roi chay vong lap gan nguoc gia tri mang temp sang mang b, sau do ghi mang b moi de len du lieu cu cua file text
		for(int i = 0; i <= n; i++){
			b[i] = temp[i];
			fprintf(f, "%10d\t|\t%-15s\t|\t%-5d\n", temp[i].id, temp[i].name, temp[i].quantity);
		}
	
		printf("Da xoa thanh cong.");
		fclose(f);
	}
}


void modify(FILE *f){
	char choice = 'n';
	int toBeModifyBookIndex = findBook(f);//Cung nhu tren, dua vao ten roi tim index phan tu de sua doi thong tin 
	
	printf("Ban muon sua thong tin cua sach nay?(y/n)");
	
	fflush(stdin);
	scanf("%c", &choice);
	
	if(choice == 'y'){

		f = fopen("BookInformation.txt", "w");
		
	//Gan gia tri moi duoc input vao phan tu can duoc doi thong tin trong mang b
		printf("Ten sach: ");
		scanf("%s", &b[toBeModifyBookIndex].name);
		printf("So luong: ");
		scanf("%d", &b[toBeModifyBookIndex].quantity);
			
	//Sau do, ghi de du lieu moi vao file text
		for(int i = 0; i <= n; i++){
			fprintf(f, "%10d\t|\t%-15s\t|\t%-5d\n", b[i].id, b[i].name, b[i].quantity);
		}
		
		printf("Da thay doi thanh cong.");
		fclose(f);
	}
}


void menu(){
	FILE *f = NULL;
	
	
	int choice = 0;
	
	printf("---------------- MENU ----------------");
	printf("\n1. Them sach vao file text");
	printf("\n2. In thong tin sach trong file text");
	printf("\n3. Tim kiem sach theo ten");
	printf("\n4. Xoa sach khoi file text");
	printf("\n5. Chinh sua thong tin sach");
	printf("\n6. Thoat");
	printf("\n--------------------------------------");
	
	
	do{
		printf("\nHay chon chuc nang ban muon theo so: ");
		scanf("%d", &choice);
		
		switch(choice){
			case 1: add(f); break;
			case 2: showInfo(f); break;
			case 3: findBook(f); break;
			case 4: deleteBook(f); break;
			case 5: modify(f); break;
			case 6: break;
			default: printf("\nBan da chon sai so, vui long chon lai.");
		}
		
	}while(choice != 6);
	
	fclose(f);
}

int main(){
	menu();
	return 0;
}

