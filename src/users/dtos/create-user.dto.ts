import { IsEmail, IsNotEmpty } from 'class-validator';

export enum AuthMethod {
  Manual,
  Google,
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;
}
