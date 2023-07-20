class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.previous = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def is_empty(self):
        return self.head is None

    def append(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        else:
            new_node.previous = self.tail
            self.tail.next = new_node
            self.tail = new_node

    def prepend(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.previous = new_node
            self.head = new_node

    def remove(self, data):
        current = self.head
        while current:
            if current.data == data:
                if current.previous:
                    current.previous.next = current.next
                else:
                    self.head = current.next

                if current.next:
                    current.next.previous = current.previous
                else:
                    self.tail = current.previous

                return True
            current = current.next
        return False

    def remove_duplicates(self):
        current = self.head
        unique_elements = set()
        new_dll = DoublyLinkedList()

        while current:
            if current.data not in unique_elements:
                unique_elements.add(current.data)
                new_dll.append(current.data)

            current = current.next

        return new_dll

    def display_forward(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    def display_backward(self):
        current = self.tail
        while current:
            print(current.data, end=" -> ")
            current = current.previous
        print("None")


# Exemplo de uso:
if __name__ == "__main__":
    dll = DoublyLinkedList()
    dll.append(1)
    dll.append(2)
    dll.append(3)
    dll.prepend(0)

    print("Lista encadeada para frente:")
    dll.display_forward()

    print("\nLista encadeada para trás:")
    dll.display_backward()

    dll.remove(2)

    print("\nLista após remover o valor 2:")
    dll.display_forward()

    dll_two = DoublyLinkedList()
    dll_two.append(1)
    dll_two.append(2)
    dll_two.append(2)
    dll_two.append(3)
    dll_two.append(4)
    dll_two.append(4)

    print("Lista original:")
    dll_two.display_forward()

    new_dll_two = dll_two.remove_duplicates()

    print("\nLista sem duplicatas:")
    new_dll_two.display_forward()
