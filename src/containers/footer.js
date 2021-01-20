import React from 'react'
import {Footer} from '../components'

export default function FooterContainer() {
    return (
      <Footer>
        <Footer.Title>Question? Contact us</Footer.Title>
        <Footer.Break />
        <Footer.Row >
        <Footer.Column>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Investor relation</Footer.Link>
          <Footer.Link href="#">Ways to watch</Footer.Link>
          <Footer.Link href="#">Conporarte informatio</Footer.Link>
          <Footer.Link href="#">Netflix Original</Footer.Link>
          <Footer.Link href="#">FAQ</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Helpe Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Term of use</Footer.Link>
          <Footer.Link href="#">Contact us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem git card</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media center</Footer.Link>
          <Footer.Link href="#">Buy gift card</Footer.Link>
          <Footer.Link href="#">cookie preference</Footer.Link>
          <Footer.Link href="#">Legl notice</Footer.Link>
        </Footer.Column>
        </Footer.Row>
        <Footer.Text>Nextflix Madagascar</Footer.Text>
      </Footer>
    );
}
