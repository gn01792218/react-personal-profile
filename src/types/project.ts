export interface Project{
    id:string,
    title:string,
    subtitle:string,
    projectFeatureDescription:string,
    projectTechnologyDescription:string,
    projectFutureDescription:string,
    tags:string[],
    imgs:string[],
    startDate:Date,
    endDate:Date,
    demoUrl:string,
    repoUrl:string,
    projectBase:string[],
    thirdParty:string[],
    UIFramework:string[],
    hintTags:string[]
}

export interface FilterTag {
    checked: boolean,
    value: string,
}
export enum ProjectFilterTag{
    VUE2 = "Vue2",
    VUE3 = "Vue3",
    REACT = "React",
    TYPSCRIPT = "Typscript",
    JAVA = "Java",
    VITE = "Vite",
    VUECLI = "Vue CLI",
    NodeJS = "Node.js",
    EXPRESS = "Express",
    FRONTEND = "Front-End",
    BACKEND = "Back-End",
    GAMEDevelop = "Game Develop"
}