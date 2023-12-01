//Bai tap 8, tao ra 5 day so va cho biet gia tri cua day lon nhat

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main(){
	
	int rows = 0; //Bien nay la so luong day so se duoc in ra
	char ch = 64; //Bien nay de dat ten cho day theo A, B, C,..
	
	float randNum, sum = 0; //Bien randNum la so random thuc hien boi rand(), va sum la de tinh tong cua mot day
	float max = 0; //Gia tri tong lon nhat trong so cac sum cua cac day so
	
	srand(time(NULL));//De cac lan random so deu se ra cac so khac nhau 
	
	printf("Ban muon random bao nhieu day so?? ");
	scanf("%d\n", &rows);
	
	for(int i = 0; i < rows; i++){ //Vong lap de in ra so luong day so vua duoc input
		sum = 0;
		
		printf("DAY %c: ", ++ch);
		
		for(int i = 0; i < 5; i++){//Moi mot day so se co 5 so
			randNum = (rand() % 101) * 0.1; //Random tung so cua mot day
			printf("%5.1f", randNum);
			sum += randNum;//Tinh tong cac so thuoc mot day
		}
		
		printf(" = %5.2f\n", sum);
		
		if(max < sum){
			max = sum;//Chon ra sum lon nhat
		}
	}
	printf("DAY LON NHAT CO TONG LA: %5.2f", max);	

	return 0;
}

