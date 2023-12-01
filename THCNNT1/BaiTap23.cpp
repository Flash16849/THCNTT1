//Bai tap 23, ve tam giac can

#include <stdio.h>


int main()
{
    int height, height2;
	int q = 0;
    
    printf("Nhap chieu cao tam giac cua ban: \n");
    scanf("%d",&height);
    height2 = height;
    
	while (height > 0)
    {
        for (int i = 1; i < height; i++){
            printf("%c", ' ');
        }
		for (int j = 0; j <= q; j++){
            printf("%c", '*');
        }
        height-- ;
        q += 2 ;
        printf("\n");
    }
    
    printf("---------------------\n");
    q = 0;
    while (height2 > 0)
    {
        for (int i = 1; i < height2; i++){
            printf("%c", ' ');
        }
		for (int j = 0; j <= q; j++){
			if(height2 != 1){
				if(j == 0 || j == q){
					printf("%c", '*');
				}
				else{
					printf("%c", ' ');
				}
			}
			else{
				printf("%c", '*');
			}
        }
        height2-- ;
        q += 2 ;
        printf("\n");
    }
    
    return 0;
}

