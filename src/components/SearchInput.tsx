import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement children={<BsSearch />}/>
        <Input placeholder='Search item(s)...' variant={'filled'} borderRadius={20}/>
    </InputGroup>
  )
}

export default SearchInput