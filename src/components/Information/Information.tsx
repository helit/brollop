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

export const Information = () => {
  const { setActiveTab } = useTabs();

  return (
    <PagePaper>
      <Section title="Vigseln" sectionId="wedding">
        <SubSection>
          <Typography variant={'body1'}>
            Vigseln kommer att äga rum kl 12:00 den 19 juli i Lycke Kyrka. Den
            är öppen och kräver ingen anmälan.
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
            Om du reser med bil, parkera bilen på kyrkans parkering.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            {`Om du reser kollektivt, sök på `}
            <Link
              to={'https://www.vasttrafik.se'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              västtrafiks hemsida
            </Link>
            {` efter
                hållplatsen: Lycke, Kungälv`}
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Fyll också i ditt färdsätt i anmälan med en eventuell kommentar i
            meddelandet, så ser vi om det kanske går att ordna samåkning med
            någon annan gäst!
          </Typography>
        </SubSection>
        <img src={church} style={{ width: '100%' }} />
      </Section>
      <Section title="Festen" sectionId="party">
        <SubSection>
          <Typography variant={'body1'}>
            Vi vill såklart gärna att du också kommer på festen efteråt! Anmäl
            dig till festen{' '}
            <Link
              to={'/anmalan'}
              onClick={() => setActiveTab(1)}
              style={{ color: muiColors.deepOrange[300] }}
            >
              här
            </Link>
            .
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Festen kommer äga rum hemma i vår trädgård i Tofta. Vi tar oss
            gemensamt dit efter vigseln. Vi önskar ett barnvänligt bröllop där
            alla får vara med och ha roligt tillsammans. Vi ber er ha detta i
            åtanke under festen.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Vi vill gärna ha en dag med massa skoj där ni gäster är med och
            bidrar till en oförglömlig dag! Det är välkommet att bidra med tal,
            spex, lekar eller annat - kontakta då toastmaster. Kontaktuppgifter
            finns längst ner på sidan.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Extra glada blir vi för dom som kan tänka sig att hjälpa till med
            praktiska göromål innan, under eller efter festen. Om du vill göra
            det, kontakta våra regissörer. Kontaktuppgifter finns längst ner på
            sidan.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Adress Tofta 166, 442 75 Lycke, 4 km med bil från Lycke kyrka.
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'https://maps.app.goo.gl/1ZjCypMsm5mfH37V8'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              Hitta på karta
            </Link>
          </Typography>
        </SubSection>
        <Typography variant={'h6'}>Parkering</Typography>
        <SubSection>
          <Typography variant={'body1'}>
            <strong>Huvudparkering:</strong> Då parkeringplatser är begränsade i
            nära anslutning till huset, ber vi er med raska ben att parkera vid
            Stall Tofta vid Tofta herrgård och promenera 20 minuter (1,5km) hem
            till oss. Vid behov kan vi lösa hämtning vid stallet/skjuts hem till
            oss.
          </Typography>
          <Typography variant={'body1'}>
            <Link
              to={'https://maps.app.goo.gl/9m6JqhKULJywQHX79'}
              style={{ color: muiColors.deepOrange[300] }}
            >
              Karta till huvudparkeringen
            </Link>
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            <strong>Parkering nära festen</strong>, begränsat antal OBS! måste
            paxas innan! Ni med mindre raska ben kan parkera lite närmare på
            olika platser i närheten i mån av plats. Annars kan vi säkert skicka
            en bil som kan plocka upp er vid herrgården. Behöver du parkera nära
            festen - kontakta Matilda (se längre ner)
          </Typography>
        </SubSection>
      </Section>
      <Section title="Lovis namngivning">
        <SubSection>
          <Typography variant={'body1'}>
            Då devisen mer fest är bättre fest gäller så slänger vi in en fest i
            festen på bröllopsdagen också!
          </Typography>
          <Typography variant={'body1'}>
            Vi kommer att köra namngivning för Lovis under festen, så var
            beredda på detta! Lovis önskar sig leksaker eller fina personliga
            saker att minnas sin namngivning med. Presenter kan mer än gärna
            vara bättre begagnat eller handgjort!
          </Typography>
        </SubSection>
      </Section>
      <Section title="Klädsel">
        <SubSection>
          <Typography variant={'body1'}>
            Ta på dig något som du känner dig fin i. Ta gärna inspiration från
            de färger vi har valt för dagen.
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Färgerna vi valt är följande:
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ColorCircle circleColor={muiColors.indigo[300]} />
            <ColorCircle circleColor={muiColors.deepOrange[300]} />
            <ColorCircle circleColor={muiColors.amber[500]} />
          </div>
        </SubSection>
      </Section>
      <Section title={'Boende'}>
        <SubSection>
          <Typography variant={'body1'}>
            Lista med förslag på boende för er som tänkt övernatta:
            <ul>
              <li>
                <Link
                  to={'https://www.skraddaron.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Stugor (10 min med bil, lägre prisklass)
                </Link>
              </li>
              <li>
                <Link
                  to={
                    'https://cafezanzibar.se/boka-boende-i-bohuslan-marsstrand/'
                  }
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Zanzibar, Tjuvkil (15 min med bil, mellan prisklass)
                </Link>
              </li>
              <li>
                <Link
                  to={'https://www.toftaherrgard.se/sv'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Tofta herrgård (promenadavstånd, dyrare prisklass)
                </Link>
              </li>
              <li>AirBnb (finns flera nära oss):</li>
              <li>
                <Link
                  to={'https://marstrands.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Strandhotellet, Marstrand (30 min med bil, dyrare prisklass)
                </Link>
              </li>
            </ul>
          </Typography>
          <Typography variant={'body1'}>
            {`Boende lite längre bort: `}
            <ul>
              <li>
                <Link
                  to={'https://www.hotellfarshatt.se/'}
                  style={{ color: muiColors.deepOrange[300] }}
                >
                  Hotell fars hatt, Kungälv
                </Link>
              </li>
            </ul>
          </Typography>
          <Typography variant={'body1'}>
            Hör av er till oss för billigare alternativ så hjälper vi till att
            leta!
          </Typography>
        </SubSection>
      </Section>
      <Section title={'Kontaktpersoner'}>
        <SubSection>
          <Typography variant={'h5'}>Toastmasters</Typography>
          <Typography variant={'body1'}>
            Alex Reuter & Andreas Larsson
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Kontakta Alex om du vill hålla tal, spexa eller nåt annat kul på
            bröllopsfesten!
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
          <Typography variant={'h5'}>Bröllopsregissörer</Typography>
          <Typography variant={'body1'}>
            Matilda Samsson Löfving & Sam Bäfvenberg
          </Typography>
        </SubSection>
        <SubSection>
          <Typography variant={'body1'}>
            Kontakta Matilda om du vill hjälpa till inför festen eller har
            frågor kring boende, transport, mat eller annan logistik.
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
