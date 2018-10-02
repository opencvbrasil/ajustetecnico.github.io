#include <iostream>
#include <cmath>

using namespace std;

int main(void){
  for(int i=0; i<41; i++){
	cout << i << ",";
  }
  cout << endl;
  for(float x=-1; x<1; x=x+0.05){
	for(float y=-1; y<1; y=y+0.05){
	  cout << (x*x+y*y)*sin(6*x)*cos(6*y) << ",";
	}
	cout << endl;
  }	
}
