import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 24px;
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 520px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(48px, 8vw, 72px);
  color: ${({ theme }) => theme.cocoa};
  line-height: 1;
  margin-bottom: 12px;
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 18px;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cocoa};
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.sand};
  background: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 17px;
  color: ${({ theme }) => theme.ink};
  border-radius: 2px;
  outline: none;
  transition: border 0.2s ease;
  &:focus { border-color: ${({ theme }) => theme.clay}; }
`;

const Check = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 17px;
  color: ${({ theme }) => theme.ink};
  padding: 14px 0;
  cursor: pointer;
  user-select: none;
  input { width: 18px; height: 18px; accent-color: ${({ theme }) => theme.cocoa}; }
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 18px 32px;
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  border: none;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 22px ${({ theme }) => theme.shadow};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.ink};
    transform: translateY(-2px);
  }

  &:disabled { opacity: 0.6; cursor: default; }
`;

const Thanks = styled.div`
  padding: 48px 24px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 22px;
  color: ${({ theme }) => theme.cocoa};
`;

const Rsvp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plusOne, setPlusOne] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const body = new URLSearchParams({
      'form-name': 'rsvp',
      'bot-field': '',
      name,
      email,
      plusOne: plusOne ? 'yes' : 'no',
    }).toString();
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) {
        throw new Error(`Netlify Forms responded ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      // eslint-disable-next-line no-console
      console.error('RSVP submit failed', err);
      alert('Sorry, your RSVP did not send. Please try again or email us.');
    }
  };

  return (
    <Section id='rsvp'>
      <Card>
        <Title>RSVP</Title>
        {submitted ? (
          <Thanks>
            Thank you, {name.split(' ')[0] || 'friend'}. We can’t wait to celebrate with you.
          </Thanks>
        ) : (
          <>
            <Sub>Kindly let us know by the 1st of November.</Sub>
            <Form
              name='rsvp'
              method='POST'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={onSubmit}
            >
              <input type='hidden' name='form-name' value='rsvp' />
              <p hidden>
                <label>
                  Don’t fill: <input name='bot-field' />
                </label>
              </p>
              <Field>
                Full name
                <Input
                  type='text'
                  name='name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your name'
                />
              </Field>
              <Field>
                Email
                <Input
                  type='email'
                  name='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='you@example.com'
                />
              </Field>
              <Check>
                <input
                  type='checkbox'
                  name='plusOne'
                  checked={plusOne}
                  onChange={(e) => setPlusOne(e.target.checked)}
                />
                I will be bringing a plus one
              </Check>
              <Button type='submit' disabled={submitting}>
                {submitting ? 'Sending…' : 'Send RSVP'}
              </Button>
            </Form>
          </>
        )}
      </Card>
    </Section>
  );
};

export default Rsvp;
