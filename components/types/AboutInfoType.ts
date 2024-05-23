type AboutInfoType = {
    title: string,
    icons?: Array<JSX.Element>,
    stage?:string
}

export type AboutDataType = {
    title: string,
    info: Array<AboutInfoType>
}