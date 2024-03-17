import { LinkType } from "@/components/menuLinks/menuLinks.data"

export const generatePath = (link: LinkType) => {
    const newObj = {}
    for (let option in link.options) {
        //@ts-ignore
        if (link.options[option]) {
            // @ts-ignore
            newObj[option] = link.options[option]
        }
    }

    return `${Object.keys(newObj).length ? '/' : ''}${Object.keys(newObj).join()}/${link.link}/`
}

