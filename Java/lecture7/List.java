public class List { 
	int[] a;
	int lastItem;
	
	public List(){
		a= new int[10];
		lastItem = -1;
	
	}
	
	public void insertItem(int newItem, int location){
	int i;
	
	for(i = lastItem; i>= location;i--){
	
		a[i+1]=a[i];
	
	} 
	
	a[location] = newItem;
	lastItem++;
	
	}

}