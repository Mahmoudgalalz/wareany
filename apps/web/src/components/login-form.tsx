'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

type Inputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-9/12 flex flex-col gap-4"
    >
      <fieldset>
        <Label htmlFor="email" className="!text-black !caret-black">
          Email
        </Label>
        <Input
          placeholder="Type your Email"
          type="email"
          id="email"
          {...(register('email'),
          {
            required: true,
          })}
        />
        {errors.email && <span>This field is required</span>}
      </fieldset>

      <fieldset>
        <Label htmlFor="password" className="!text-black !caret-black">
          Password
        </Label>
        <Input
          placeholder="Type your Password"
          id="password"
          type={'password'}
          {...(register('password'),
          {
            required: true,
          })}
        />
        {errors.password && <span>This field is required</span>}
      </fieldset>

      <Button
        className="w-full !bg-primary ~text-lg/xl font-semibold mt-1"
        type="submit"
        name="Open Closet"
        variant="primary"
      >
        Open Closet
      </Button>
    </form>
  );
}
