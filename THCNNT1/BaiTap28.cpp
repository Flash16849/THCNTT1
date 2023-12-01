//Bai tap 28, doc cac chu so trong 1 file text, tim so nguyen to trong do roi luu cac so nguyen to do qua file khac

#include <stdio.h>
#include <math.h>

int number[100] = {};
int ordinalNum = -1;

void read(FILE *f, int &ordinalNum){
	f = fopen("NumberList.txt", "r");
	
	if(f == NULL){
		printf("Failed to open");
	}
	else{
		while(!feof(f)){
			ordinalNum++;
			fscanf(f, "%d ", &number[ordinalNum]);
		}
	}
	
	fclose(f);
	 
}

void findPrimeNum(FILE *f2){
	f2 = fopen("PrimeNumList.txt", "w");
	
	for(int i = 0; i < ordinalNum; i++){
		int flag = 0;
		
		for(int j = 2; j <= sqrt(number[i]); j++){
			if(number[i] % j == 0){
				flag = 1;
			}
		}
		
		if(flag == 0){
			fprintf(f2, "%d ", number[i]);
		}
	}
	printf("Da hoan thanh ghi so nguyen to vao file khac, vui long kiem tra du lieu cua file moi.");
	fclose(f2);
}


int main(){
	FILE *f;
	FILE *f2;
	
	read(f, ordinalNum);
	findPrimeNum(f2);
	
	return 0;
}

