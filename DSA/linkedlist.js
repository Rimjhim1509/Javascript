class Node{
    constuctor(){
        this.data= data;
        this.next= next;

    }
}
class LinkedList {
    constructor(){
        this.head = null
    }
}
LinkedList.prototype.insertAtBegin = function(){
    const newNode = new Node (data);
    this.head = newNode;
}

//insert at end 
LinkedList.prototype.insertAtEnd= function(){
    const newNode = new Node (data)
    if(!this.head){
        this.head = newNode ;
        return;
    }
    let last = this.head;
   while(last.next){
    last = last.next
   }
   last.next = newNode;

}
//method to insert at given node

LinkedList.prototype.insertAfter = function(prevNode,data){
    if(!prevNode){
        console.log("the insertion will not happen")

    }
    const newNode = new Node (data , prevNode.next);
    prevNode.next = newNode;

} 
//method to delete First node and last node 
LinkedList.prototype.deleteFirstNode = function (){
    if(!this.head){
        return
    }
    this.head = this.next.head;
}
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return
    }
    if(!this.head.next){
        this.head=null;
        return;
    }
    let secondLast = head;
    while(secondLast.next.next){
        secondLast =secondLast.next
    }
}
    //funny situation on linked list 
    //given value match and delete it
    
 

    //search or traverse array 

    LinkedList.prototype.search = function(key){
        let current = this.head;
        while(current){
            if(current.data === key){
                return true;
            }
            current = current.next
                
            
        }
        return false
    }