import { Form, Input, Label, Switch, XStack } from 'tamagui';

const Login = () => {
  return (
    <Form onSubmit={() => {}}>
      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="name">
          Name
        </Label>
        <Input flex={1} id="name" defaultValue="Nate Wienert" />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor="notify">
          Notifications
        </Label>
        <Switch id="notify">
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
    </Form>
  );
};

export default Login;
