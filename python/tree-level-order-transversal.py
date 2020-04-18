class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""

def levelOrder(root):
    #Write your code here

    queue=[]
    queue.append(root)
    while queue:
        node=queue.pop(0)
        print(node.info,end=" ")
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:    
            queue.append(node.right)
  #  queue = []
    #if root != None:
    #    queue.append(root)
   
    #queue.append(root)
   # while(len(queue)>0):
    #    node = queue.pop(0)
    #    print (node," ")
   #     if node.left:
   #         queue.append(node.left)
  #      if node.right:
  #          queue.append(node.right)  
    
  #  if root != None:
  #      print(root)
    #
  #  if root.left != None:
  #    print(root, levelOrder(root.left))
  #  elif root.right != None:
  #    print(root, levelOrder(root.right))



tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.create(arr[i])

levelOrder(tree.root)