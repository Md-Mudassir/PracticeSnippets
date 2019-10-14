#include<stdio.h>

void main ()
{
  int mat[10][10], transpose[10][10], final[10][10], nextRotate[10][10];
  int i, j, row, col;
  printf ("Enter the number of rows and columns for 1st matrix\n");
  scanf ("%d%d", &row, &col);
  printf ("Enter the elements of the matrix\n");
  for (i = 0; i < row; i++)
    {
        
      for (j = 0; j < col; j++)
	{
	  scanf ("%d", &mat[i][j]);
	}
    }


  printf ("The matrix\n");
  for (i = 0; i < row; i++)
    {
      for (j = 0; j < col; j++)
	{
	  printf ("%d\t", mat[i][j]);
	}
      printf ("\n");
    }
  //transpose logic
  for (i = 0; i < row; i++)
    {
      for (j = 0; j < col; j++)
	{
	  transpose[j][i] = mat[i][j];
	}
    }

  printf ("The transpose of the matrix is\n");
  for (i = 0; i < col; i++)
    {
      for (j = 0; j < row; j++)
	{
	  printf ("%d\t", transpose[i][j]);
	}
      printf ("\n");
    }


  printf ("The reverse of the matrix is\n");
  for (i = 0; i < col; i++)
    {
      for (j = 0; j < row; j++)
	{
	  printf ("%d\t", transpose[i][(row - 1) - j]);
	}
      printf ("\n");
      
    }

  for (i = 0; i < col; ++i)
    for (j = 0; j < row; ++j)
      {
	nextRotate[j][i] = transpose[i][(row - 1) - j];
      }

  printf ("Next rotation \n");
  for (i = 0; i < row; ++i)
    {
      for (j = 0; j < col; ++j)
	{
	  printf ("%d\t", nextRotate[i][(col - 1) - j]);
	}
      printf ("\n");
    }
  for (i = 0; i < row; ++i)
    for (j = 0; j < col; ++j)
      {
	final[j][i] = nextRotate[i][(col - 1) - j];
      }

  printf ("Final rotation \n");
  for (i = 0; i < col; ++i)
    {
      for (j = 0; j < row; ++j)
	{
	  printf ("%d\t", final[i][(row - 1) - j]);
	}
      printf ("\n");
    }

}
