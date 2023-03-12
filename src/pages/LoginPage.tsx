import { Card } from '@7shifts/sous-chef';
import { Button } from '@7shifts/sous-chef';
import { PasswordField, TextField } from '@7shifts/sous-chef';
import { Form, FormFooter, FormRow } from '@7shifts/sous-chef';
import { Link } from '@7shifts/sous-chef/dist/actions';
import './LoginPage.scss';

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
                                        label="First Name"
                                        onBlur={function noRefCheck() {}}
                                        onChange={function noRefCheck() {}}
                                        onFocus={function noRefCheck() {}}
                                        onKeyDown={function noRefCheck() {}}
                                    />
                                </FormRow>
                                <PasswordField
                                    name="password"
                                    onBlur={function noRefCheck() {}}
                                    onChange={function noRefCheck() {}}
                                    placeholder="Type your password"
                                />

                                {/* <Link
                                    href="http://souschef.7shifts.com"
                                    onClick={function noRefCheck() {}}
                                >
                                    Forgot passord? Clic here!
                                </Link> */}

                                <FormFooter
                                    actions={{
                                        primary: (
                                            <Button
                                                size="full-width"
                                                onClick={() => {}}
                                            >
                                                Enviar
                                            </Button>
                                        )
                                    }}
                                />
                            </Form>
                        </Card>
                    </div>
                </div>

                <div className="right-column">
                    <img src="" alt="" />
                    <p>Manage you small business easier!</p>
                </div>
            </div>
        </>
    );
};
export default LoginPage;
