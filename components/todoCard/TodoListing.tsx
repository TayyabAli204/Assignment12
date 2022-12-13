import { Icon, Text } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

type todoItem = {
    createdAt?: string,
    description: string,
    id?: string
}

type TodoList = {
    todoList: todoItem[]
}

export default function TodoListing(props:TodoList) {

    console.log("props.todoList", props.todoList);
    


    return (
        <div>

            {props.todoList.map((item: todoItem,index:number) => {
                return (
                    <>
                    <Text mt="2" py='1' key={index} style={{ backgroundColor: 'white' }}>
                        {item.description}
                    </Text>
                    </>
                )
            })}





        </div>
    )
}