public class ListNode{
	int item;
	ListNode next;
	
	
	
		public void insertAfter(int item){
			this.next= new ListNode(item,next);
			
			
		}
	
}

public ListNode(int item, ListNode next){
	this.item = item;
	this.next = next;
	
}

public ListNode(int item){
		this(item,null);
	
}

ListNode l1 = new ListNode(7,new ListNode(0),new ListNode(6)));
//ListNode l2 = new ListNode;

l2.insertAfter();

