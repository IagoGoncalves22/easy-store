import { Card } from '@7shifts/sous-chef';
import { Button } from '@7shifts/sous-chef';
import { PasswordField, TextField } from '@7shifts/sous-chef';
import { Form, FormFooter, FormRow } from '@7shifts/sous-chef';
import { Link } from '@7shifts/sous-chef';
import './LoginPage.scss';
import imageToAdd from './images/img-login.jpg';

const LoginPage = () => {
    return (
        <>
            <div className="container">
                <div className="login-page">
                    <div className="login-card">
                        <Card>
                            <Form>
                                <FormRow>
                                    <TextField
                                        name="login-email"
                                        label="Email"
                                        onBlur={function noRefCheck() {}}
                                        onChange={function noRefCheck() {}}
                                        onFocus={function noRefCheck() {}}
                                        onKeyDown={function noRefCheck() {}}
                                        placeholder="Type your better email"
                                    />
                                </FormRow>
                                <PasswordField
                                    name="password"
                                    label="Password"
                                    onBlur={function noRefCheck() {}}
                                    onChange={function noRefCheck() {}}
                                    placeholder="Type your password"
                                />
                                <div>
                                    <Link
                                        href="http://souschef.7shifts.com"
                                        onClick={function noRefCheck() {}}
                                    >
                                        Forgot passord? Click here!
                                    </Link>
                                </div>

                                <Button
                                    theme="primary"
                                    size="full-width"
                                    onClick={() => {}}
                                >
                                    Enviar
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </div>

                <div className="right-column">
                    <img src={imageToAdd} alt="" />
                    <p>
                        Manage your business
                        <span className="color-span"> easier!</span>
                    </p>
                </div>
            </div>
        </>
    );
};
export default LoginPage;
