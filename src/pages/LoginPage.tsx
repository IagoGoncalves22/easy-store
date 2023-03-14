import { Card, Text } from '@7shifts/sous-chef';
import { Button } from '@7shifts/sous-chef';
import { PasswordField, TextField } from '@7shifts/sous-chef';
import { Form } from '@7shifts/sous-chef';
import { Link } from '@7shifts/sous-chef';
import './LoginPage.scss';
import imageToAdd from './images/img-login.jpg';

const LoginPage = () => {
    return (
        <div className="container">
            <div className="login-page">
                <div className="login-card">
                    <Card>
                        <Form>
                            <TextField
                                name="login-email"
                                label="Email"
                                placeholder="Type your better email"
                            />
                            <PasswordField
                                name="password"
                                label="Password"
                                placeholder="Type your password"
                            />
                            <Link href="">Forgot passord?</Link>
                            <Button theme="primary" size="full-width">
                                Login
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>

            <div className="right-column">
                <img src={imageToAdd} alt="" />
                <Text>
                    Manage your business
                    <Text color="#6d87dd"> easier!</Text>
                </Text>
            </div>
        </div>
    );
};
export default LoginPage;
