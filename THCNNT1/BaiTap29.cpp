//Bai tap 29, quan ly danh sach sinh vien

#include<stdio.h>
#include<stdlib.h>
#include <string.h>



typedef struct SINHVIEN{
	char name[25];
	int age;
	float dtb;
}sv;

sv s[100];
int n = -1;//Bien nay la so thu tu cua cac phan tu duoc them vao mang s, se tang dan moi khi mot phan tu nao do duoc them vao


void add(){
	
	n++;

	//Ten, tuoi va dtb cua sinh vien do nguoi dung nhap
	printf("Ho va ten sinh vien: ");
	fflush(stdin);
	gets(s[n].name);
	printf("Tuoi: ");
	fflush(stdin);
	scanf("%d", &s[n].age);
	printf("Diem trung binh: ");
	fflush(stdin);
	scanf("%f", &s[n].dtb);	
	fflush(stdin);
}


void showInfo(){
	
	printf("%-30s\t|\t%-5s\t|\t%-5s\n", "NAME", "AGE", "DTB");
	printf("--------------------------------------------------------\n");
	
	for(int i = 0; i <= n; i++){
		printf("\n%-30s\t|\t%-5d\t|\t%-5.2f\n", s[i].name, s[i].age, s[i].dtb);
	}
}


int organize(){
	sv temp;
	
	//Vong lap de sap xep danh sach tang dan theo diem trung binh
	for(int i = 0; i <= n; i++){
		for(int j = i+1; j <= n; j++){
			if(s[i].dtb > s[j].dtb){
				temp = s[i];
				s[i] = s[j];
				s[j] = temp;
			}
		}
	}
	printf("\nDa sap xep xong danh sach sinh vien.");
}


void find(){
	
	char name[25];
	
	printf("Nhap ho ten sinh vien can tim: ");
	fflush(stdin);
	gets(name);
	fflush(stdin);
	
	//Vong lap check neu tim ra thong tin sinh vien dua theo ho va ten thi in ra man hinh, khong thi thong bao khong tim thay
	for(int i = 0; i <= n; i++){
		if(strcmp(s[i].name, name) == 0){
			printf("\n%-30s\t|\t%-5d\t|\t%-5.2f\n", s[i].name, s[i].age, s[i].dtb);
			break;
		}
		if(i == n){
			printf("\nKhong ton tai sinh vien ban dang tim.");
		}
	}
	
	if(s[0].age == NULL){
		printf("\nKhong ton tai sinh vien ban dang tim.");
	}
}




void menu(){
	int choice = 0;
	
	printf("---------------- MENU ----------------");
	printf("\n1. Them sinh vien vao danh sach");
	printf("\n2. In thong tin sinh vien");
	printf("\n3. Sap xep theo diem trung binh");
	printf("\n4. Tim sinh vien theo ho va ten");
	printf("\n5. Thoat");
	printf("\n--------------------------------------");
	
	
	do{
		printf("\nHay chon chuc nang ban muon theo so: ");
		scanf("%d", &choice);
		
		switch(choice){
			case 1: add(); break;
			case 2: showInfo(); break;
			case 3: organize(); break;
			case 4: find(); break;
			case 5: break;
			default: printf("\nBan da chon sai so, vui long chon lai.");
		}
		
	}while(choice != 5);
}

int main(){
	menu();
	return 0;
}

