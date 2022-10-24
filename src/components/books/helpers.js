import { notification } from 'antd';

const ISBN_PATTERN = '^(?:ISBN(?:-1[03])?:?●)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-●]){3})[-●0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[-●]){4})[-●0-9]{17}$)(?:97[89][-●]?)?[0-9]{1,5}[-●]?[0-9]+[-●]?[0-9]+[-●]?[0-9X]$';
export const ISBN_REGEX = new RegExp(ISBN_PATTERN);


export const openNotificationWithIcon = (type, description) => {
    notification[type]({
        message: 'Error',
        description: description,
        placement: 'bottomRight'
    });
};