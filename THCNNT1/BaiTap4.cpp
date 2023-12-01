//Bai tap 4, dem co bao nhieu so nguyen to, so hoan thien, so chinh phuong

#include <stdio.h>
#include <math.h>


//Ham dem xem trong say so input, co bao nhieu so nguyen to, so hoan thien va so chinh phuong
void countNum(int a[], int ordinalNum){
	
	//3 bien lan luot dem so nguyen to, so hoan thien, so chinh phuong
	int countPrime = 0;
	int countComplete = 0;
	int countSquare = 0;
	
	//Bien de check so nguyen to
	int flag = 0;
	
	//Vong lap nay de check so nguyen to, neu chia het thi khong phai so nguyen to
	for(int i = 0; i <= ordinalNum; i++){
		for(int j = 2; j <= sqrt(a[i]); j++){
			if(a[i] % j == 0){
				flag = 1;
			}
		}
		
		if(flag == 0 && a[i] != 1){
			countPrime++;
		}
		else{
			//Neu can bac 2 cua so a[i] nhan cho can bac 2 a[i] bang a[i] thì la so chinh phuong
			if(sqrt(a[i])*sqrt(a[i]) == a[i]){
				countSquare++;
			}
			else{
				countComplete++;
			}
		}	
	}
	
	printf("Co %d so nguyen to, %d so hoan thien, %d so chinh phuong", countPrime, countComplete, countSquare);
}

int main(){
	int number = 0;
	int array[100] = {};
	int ordinalNum = -1; //So thu tu trong mang de luu input vao mang trong vong lap do while
	
	//vong lap cho nhap den khi input <= 0, dong thoi dua input vao mang array de dua vao ham countNum
	do{
		printf("Input an integer: ");
		scanf("%d", &number);
		if(number > 0){
			ordinalNum++;
			array[ordinalNum] = number;
		}
	}while(number > 0);
	
	countNum(array, ordinalNum);
}

