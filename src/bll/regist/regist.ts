import { UserModel } from '../../model/regist/user';

const regist = ({newUserName, newPassword}: {newUserName: string, newPassword: string}) => {
    let userEntity = new UserModel({
        userName: newUserName,
        password: newPassword,
    });

    return UserModel.create(userEntity);
};

export {
    regist,
};