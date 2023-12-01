//Bai tap 3: tim so le, chan va nguyen to

#include <stdio.h>
#include <math.h>

//tim va sap xep cac so chan, le, nguyen to theo 3 mang so chan, so le, so nguyen to de in ra man hinh 3 mang do
void findEvenOddPrimeNum(int a[], int ordinalNum){
	
	//3 bien nay lan luot dung de chi so thu tu trong cac mang so chan, so le, so nguyen to
	int ordinalEvenNum = -1;
	int ordinalOddNum = -1;
	int ordinalPrimeNum = -1;
	
	//3 mang de chua so chan(evenNum), so le(oddNum), so nguyen to(primeNum)
	int evenNum[] = {};
	int oddNum[] = {};
	int primeNum[] = {};
	
	//chay vong lap for cho mang a de check cac so input 
	for(int i = 0; i <= ordinalNum; i++){
		int flag = 0; // flag de check so nguyen to
		
		//vong lap de check a[i] co phai la so nguyen to
		for(int j = 2; j <= sqrt(a[i]); j++){
			if(a[i] % j == 0){
				flag = 1; // neu flag = 1 thi so a[i] khong phai la so nguyen to
			}
		}
		
		//check a[i] co phai la so le
		if(a[i] % 2 != 0){
			ordinalOddNum++;
			oddNum[ordinalOddNum] = a[i];
			
			//neu la so le va dong thoi flag = 0 thi cung la so nguyen to
			if(flag == 0 && a[i] != 1){
				ordinalPrimeNum++;
				primeNum[ordinalPrimeNum] = a[i];
			}
		}
		
		//check a[i] la so chan
		else if(a[i] % 2 == 0){
			ordinalEvenNum++;
			evenNum[ordinalEvenNum] = a[i];
		
			//neu la so chan va dong thoi flag = 0 thi cung la so nguyen to
			if(flag == 0){
				ordinalPrimeNum++;
				primeNum[ordinalPrimeNum] = a[i];
			}
		}
	}
	
	//in ra 3 mang so
	printf("Even numbers: ");
	for(int i = 0; i <= ordinalEvenNum; i++){
		printf("%d, ", evenNum[i]);
	}
	
	printf("\nOdd numbers: ");
	for(int i = 0; i <= ordinalOddNum; i++){
		printf("%d, ", oddNum[i]);
	}
	
	printf("\nPrime numbers: ");
	for(int i = 0; i <= ordinalPrimeNum; i++){
		printf("%d, ", primeNum[i]);
	}
}


int main(){
	int number = 0;
	int ordinalNum = -1;// so thu tu cua cac input duoc dua vao mang a
	int a[100] = {};
	
	//vong lap de nhap input cho den khi input <= 0
	do{
		printf("Input an integer: ");
		scanf("%4d", &number);
		
		//input se duoc dua vao mang a de thuc hien ham check so chan, le, nguyen to (tru so input <= 0)
		if(number > 0){
			ordinalNum++;
			a[ordinalNum] = number;
		}
	}while(number > 0);
	
	findEvenOddPrimeNum(a, ordinalNum);
}

