import ConverterHelper from "../utils/ConverterHelper";

export const isAboutUsLoading = ({home}) => home.isAboutUsLoading;
export const getAboutUsTitle = ({home}) => home.aboutUs && home.aboutUs.title;
export const getAboutUsContent = ({home}) => home.aboutUs && ConverterHelper.convertMarkDownToHtml(home.aboutUs.content);
