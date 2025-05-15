import { colors as muiColors, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PagePaper } from '../PageLayout/PageLayout.styled';
import { Section, SubSection } from '../Section/Section';
import church from '../../assets/lycke-ka-akvarell.png';

import styled from '@emotion/styled';
import { useTabs } from '../../hooks/useTabs';

const ColorCircle = styled.div<{
  circleColor: string;
}>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor};
  margin: 8px;
`;

export const InformationEnglish = () => {
  const { setActiveTab } = useTabs();

  return (
    <PagePaper>
      <Section title="Wedding ceremony" sectionId="wedding">
        <SubSection>
          <Typography variant={'body1'}>
            The wedding ceremony will take place at 12:00 on July 19 in Lycke
            Church. It is open and requires no registration.
          </Typography>
          <Typography variant={'body1'}>
            {`Adress till kyrkan: `}
            <Link
              to={'https://maps.app.goo.gl/WHjSzpv5B3UVLRam8'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              Stora Lycke 350, 442 75 Lycke
            </Link>
            {`.`}
          </Typography>
          <Typography variant={'body1'}>
            If you are traveling by car, park your car in the church parking
            lot.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            {`If you travel by public transport, search for the stop: Lycke, Kungälv at `}
            <Link
              to={'https://www.vasttrafik.se'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              västtrafik's website.
            </Link>
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Please also fill in your mode of transportation in the registration
            with a possible comment in the message, and we will see if it might
            be possible to arrange carpooling with another guest!
          </Typography>
        </SubSection>
        <img src={church} style={{ width: '100%' }} />
      </Section>
      <Section title="The party" sectionId="party">
        <SubSection>
          <Typography variant={'body1'}>
            Of course, we'd love you to come to the party afterwards too! Sign
            up for the party{' '}
            <Link
              to={'/anmalan'}
              onClick={() => setActiveTab(1)}
              style={{ color: muiColors.deepOrange[300] }}
            >
              here
            </Link>
            .
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            The party will take place in our garden in Tofta. We will go there
            together after the wedding ceremony. We wish a child-friendly
            wedding where everyone can participate and have fun together. We ask
            you to keep this in in mind during the party.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            We would love to have a fun party where your guests contribute to an
            unforgettable day! You are more than welcome to contribute with
            speeches, spectacles, games or anything else - please contact the
            toastmaster. Contact details can be found at the bottom of the page.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            We are especially happy for those who are willing to help with
            practical tasks before, during or after the party. If you would like
            to do so, please contact our directors. Contact details can be found
            at the bottom of the page.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Address Tofta 166, 442 75 Lycke, 4 km by car from Lycke church.
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'https://maps.app.goo.gl/1ZjCypMsm5mfH37V8'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              Find on map
            </Link>
          </Typography>
        </SubSection>
        <Typography variant={'h6'}>Parking</Typography>
        <SubSection>
          <Typography variant={'body1'}>
            <strong>Main parking lot:</strong> As parking spaces are limited
            close to our the house, we ask our guest with quick legs to park at
            Tofta Stables at Tofta Manor and walk 20 minutes (1.5km) home to us.
            If necessary, we can arrange pick-up at the stable / shuttle home to
            us.
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'https://maps.app.goo.gl/9m6JqhKULJywQHX79'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              Map to the main parking lot
            </Link>
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            <strong>Parking near the party</strong>, limited number NOTE! must
            be be booked in advance! Those with less quick legs can park a
            little closer at different places nearby, subject to availability.
            Otherwise we can certainly send a car that can pick you up at the
            mansion. If you need to park near the party - contact Matilda (see
            further down)
          </Typography>
        </SubSection>
      </Section>
      <Section title="Lovis naming ceremony">
        <SubSection>
          <Typography variant={'body1'}>
            Since the motto more party is better party applies, we throw a party
            in the party on the wedding day too!
          </Typography>
          <Typography variant={'body1'}>
            We will be doing a naming ceremony for Lovis during the party, so be
            prepared for this! Lovis would like toys or nice personalized things
            to remember her naming. Presents can more than happy be better
            second hand or handmade!
          </Typography>
        </SubSection>
      </Section>
      <Section title={'Wedding gifts'}>
        <SubSection>
          <Typography variant={'body1'}>
            We don't want any stuff. If you want to give us a wedding gift, we
            would like a contribution to our wedding fund, the construction of
            our second floor or a fun shrub / fruit tree to plant in the garden.
          </Typography>
          <Typography variant={'body1'}>
            Not sure how to send money internationally, but here is our shared
            bank account at Länsförsäkringar bank: 9060-66 753 29.
          </Typography>
        </SubSection>
      </Section>
      <Section title="Clothing">
        <SubSection>
          <Typography variant={'body1'}>
            Wear something you feel good wearing. Feel free to take inspiration
            from the colors we have chosen for the day.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            The colors we have chosen are as follows:
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ColorCircle circleColor={muiColors.indigo[300]} />
            <ColorCircle circleColor={muiColors.deepOrange[300]} />
            <ColorCircle circleColor={muiColors.amber[500]} />
          </div>
        </SubSection>
      </Section>
      <Section title={'Accommodation'}>
        <SubSection>
          <Typography variant={'body1'}>
            List of accommodation suggestions for those who intend to stay
            overnight:
            <ul>
              <li>
                <Link
                  to={'https://www.skraddaron.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Cottages (10 min by car, lower price range)
                </Link>
              </li>
              <li>
                <Link
                  to={
                    'https://cafezanzibar.se/boka-boende-i-bohuslan-marsstrand/'
                  }
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Zanzibar, Tjuvkil (15 min by car, medium price range)
                </Link>
              </li>
              <li>
                <Link
                  to={'https://www.toftaherrgard.se/sv'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Tofta Manor (walking distance, more expensive price range)
                </Link>
              </li>
              <li>AirBnb (there are several nearby):</li>
              <li>
                <Link
                  to={'https://marstrands.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Strandhotellet, Marstrand (30 min by car, more expensive price
                  range)
                </Link>
              </li>
            </ul>
          </Typography>
          <Typography variant={'body1'}>
            {`Accommodation a bit further away: `}
            <ul>
              <li>
                <Link
                  to={'https://www.hotellfarshatt.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Hotel Father's Hat, Kungälv
                </Link>
              </li>
            </ul>
          </Typography>
          <Typography variant={'body1'}>
            Contact us for cheaper alternatives and we will help you with the
            search!
          </Typography>
        </SubSection>
      </Section>
      <Section title={'Contacts'}>
        <SubSection>
          <Typography variant={'h5'}>Toastmasters</Typography>
          <Typography variant={'body1'}>
            Alex Reuter & Andreas Larsson
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Contact Alex if you want to make a speech, give a speech or do
            something else fun at the wedding party!
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'mailto:alexandra_reuter@hotmail.com'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              alexandra_reuter@hotmail.com{' '}
            </Link>
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'h5'}>Wedding directors</Typography>
          <Typography variant={'body1'}>
            Matilda Samsson Löfving & Sam Bäfvenberg
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Contact Matilda if you want to help with the party or have questions
            about accommodation, transportation, food or other logistics.
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'mailto:matilda@lofving.se'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              matilda@lofving.se
            </Link>
          </Typography>
        </SubSection>
      </Section>
    </PagePaper>
  );
};
