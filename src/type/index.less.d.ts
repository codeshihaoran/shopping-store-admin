// less文件声明
declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}