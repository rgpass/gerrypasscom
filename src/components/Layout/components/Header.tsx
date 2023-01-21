import React, { FC } from "react"
import { NestedHeader } from "./NestedHeader"
import { RootHeader } from "./RootHeader"

interface Props {
  isRootPath: boolean
  title: string
}

export const Header: FC<Props> = ({ isRootPath, ...props }) => {
  return isRootPath ? <RootHeader {...props} /> : <NestedHeader {...props} />
}
