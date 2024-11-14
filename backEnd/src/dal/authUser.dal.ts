import UserModel, {IUser} from "../model/User.model"; 

export async function addNewUser(user:Partial<IUser> ): Promise<IUser> {
    const newUser = new UserModel(user);
    await newUser.save(); 
    if (newUser) return newUser
    else throw new Error("user not created");
}
export async function login(userName:string, password:string): Promise<IUser> {
    const user = await UserModel.findOne({userName});
    console.log(user, "user");
    
    if(user &&await user.comparePassword(password)) 
        return user
    else throw new Error("user not found");
}