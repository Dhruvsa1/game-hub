import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardLoadingSkeleton = () => {
  return (
    <Card>
        <Skeleton height={'400px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardLoadingSkeleton