#include<stdio.h>

int main(){
	int n=0;
	for(int i = 0; i<5; i++){
		n = i++;	
		printf("i: %dn: %d\n", i, n);
	}
	return 0;
}
