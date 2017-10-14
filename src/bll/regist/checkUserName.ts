import { UserModel } from '../../model/regist/user';

const checkUserName = ({ userName }: { userName: string }) => {
    return UserModel.findOne(
        {
            userName: userName,
        }, {
            userName: 1,
        },
    );
};

export {
    checkUserName,
};