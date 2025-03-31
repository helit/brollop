import { PageLayout } from '../components/PageLayout/PageLayout';
import { Welcome } from '../components/Welcome/Welcome';
import styled from '@emotion/styled';

import { PagePaper } from '../components/PageLayout/PageLayout.styled';
import { Section, SubSection } from '../components/Section/Section';
import { colors as muiColors, Typography } from '@mui/material';
import church from '../assets/lycke-ka-akvarell.png';
import { Link } from 'react-router-dom';
import { useTabs } from '../hooks/useTabs';

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColorCircle = styled.div<{
  circleColor: string;
}>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor};
  margin: 8px;
`;

export const Start = () => {
  const { setActiveTab } = useTabs();

  return (
    <StartWrapper>
      <PageLayout>
        <Welcome />
        <PagePaper>
          <Section title="Vigseln" sectionId="wedding">
            <SubSection>
              <Typography variant={'body1'}>
                {`Vigseln kommer att äga rum kl 12:00 den 19 juli i Lycke Kyrka.`}
              </Typography>
              <Typography variant={'body1'}>
                {`Vigseln är öppen och kräver ingen anmälan.`}
              </Typography>
            </SubSection>
            <img src={church} style={{ width: '100%' }} />
          </Section>
          <Section title="Festen" sectionId="party">
            <SubSection>
              <Typography variant={'body1'}>
                Vi vill såklart gärna att du också kommer på festen efteråt!
                Anmäl dig till festen{' '}
                <Link
                  to={'/anmalan'}
                  onClick={() => setActiveTab(1)}
                  style={{ color: muiColors.deepOrange[500] }}
                >
                  här
                </Link>
                .
              </Typography>
              <Typography variant={'body1'}>
                Festen kommer äga rum hemma i vår trädgård i Tofta.
              </Typography>
            </SubSection>
          </Section>
          <Section title="Klädsel">
            <SubSection>
              <Typography variant={'body1'}>
                Ta på dig något fint. Vi vill gärna att du har kläder eller
                någon detalj i de färger vi har valt för dagen.
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>
                Färgerna vi valt är följande:
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ColorCircle circleColor={muiColors.deepOrange[500]} />
                <ColorCircle circleColor={muiColors.blue[500]} />
                <ColorCircle circleColor={muiColors.amber[600]} />
              </div>
            </SubSection>
          </Section>
          <Section title="Program">
            <SubSection>
              <Typography variant={'h6'}>Dagen i stora drag</Typography>
              <Typography variant={'body1'}>Vigsel kl 12</Typography>
              <Typography variant={'body1'}>
                Vi tar oss gemensamt till festen och håller på så länge vi
                orkar!
              </Typography>
              <Typography variant={'body1'}>
                Vi bjuder på mat och dryck under middagen, senare under kvällen
                blir det bar med bra priser.
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>En rolig fest!</Typography>
              <Typography variant={'body1'}>
                Vi vill gärna ha en dag med massa skoj!
              </Typography>
              <Typography variant={'body1'}>
                Vill du bidra på festen med tal, spex eller liknande, kontakta
                toastmaster (se nedan).
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>Något litet om alkohol:</Typography>
              <Typography variant={'body1'}>
                Vi önskar ett barnvänligt bröllop där alla får vara med och ha
                roligt tillsammans. Vi ber er ha detta i åtanke under festen.
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>
                Vill du hjälpa oss före, under och efter festen?
              </Typography>
              <Typography variant={'body1'}>
                Hör av dig till regissören Matilda! (se nedan)
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>Bröllopsgåvor å sånt</Typography>
              <Typography variant={'body1'}>
                Vi önskar oss inga presenter!
              </Typography>
              <Typography variant={'body1'}>
                Utöver en härlig dag med er önskar vi oss istället ett bidrag
                till vårt husbygge och till bröllopet.
              </Typography>
            </SubSection>
          </Section>
          <Section title={'Hitta till Vigseln'}>
            <SubSection>
              <Typography variant={'body1'}>
                Lycke Kyrka på adressen Stora Lycke 350, 442 75 Lycke.
              </Typography>
              <Typography variant={'body1'}>
                <Link
                  to={'https://maps.app.goo.gl/WHjSzpv5B3UVLRam8'}
                  style={{ color: muiColors.deepOrange[500] }}
                >
                  Hitta på karta
                </Link>
              </Typography>
              <Typography variant={'body1'}>
                Om du reser med bil, parkera bilen på kyrkans parkering.
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>Kollektivtrafik:</Typography>
              <Typography variant={'body1'}>
                Hållplats: Lycke, Kungälv
              </Typography>
              <Typography variant={'body1'}>
                <Link
                  to={'https://www.vasttrafik.se'}
                  style={{ color: muiColors.deepOrange[500] }}
                >
                  Västtrafik
                </Link>
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>
                Fyll också i ditt färdsätt i anmälan, så ser vi om det går att
                ordna samåkning med någon annan gäst!
              </Typography>
            </SubSection>
          </Section>
          <Section title={'Festen'}>
            <SubSection>
              <Typography variant={'body1'}>
                Adress Tofta 166, 442 75 Lycke, 4 km med bil från Lycke kyrka.
              </Typography>
              <Typography variant={'body1'}>
                <Link
                  to={'https://maps.app.goo.gl/1ZjCypMsm5mfH37V8'}
                  style={{ color: muiColors.deepOrange[500] }}
                >
                  Hitta på karta
                </Link>
              </Typography>
            </SubSection>
            <Typography variant={'h6'}>Parkering</Typography>
            <SubSection>
              <Typography variant={'body1'}>
                <strong>Huvudparkering:</strong> Då parkeringplatser är
                begränsade i nära anslutning till huset, ber vi er med raska ben
                att parkera vid Stall Tofta vid Tofta herrgård och promenera 20
                minuter (1,5km) hem till oss. Vid behov kan vi lösa hämtning vid
                stallet/skjuts hem till oss (Hör av er om detta innan)
              </Typography>
            </SubSection>
            <SubSection>
              <Typography variant={'body1'}>
                <strong>Parkering nära festen</strong>, begränsat antal OBS!
                måste paxas innan! Ni med mindre raska ben kan parkera lite
                närmare på olika platser i närheten i mån av plats. Annars kan
                vi säkert skicka en bil som kan plocka upp er vid herrgården.
                Behöver du parkera nära festen - kontakta Matilda (se längre
                ner)
              </Typography>
            </SubSection>
          </Section>
          <Section title={'Boende'}>
            <SubSection>
              <Typography variant={'body1'}>
                Lista med förslag på boende för er som tänkt övernatta:
                Camping/stugor (15 min från festen med bil): Tofta herrgård
                (promenadavstånd): Strandhotellet, Marstrand (30 min med bil):
                AirBnb (finns flera nära oss):
              </Typography>
            </SubSection>
            <Typography variant={'body1'}>
              Hör av er till oss för billigare alternativ!
            </Typography>
          </Section>
          <Section title={'Ladda upp bilder och filmer'}>
            <SubSection>
              <Typography variant={'body1'}>
                Vi har tänkt att vi gärna vill att ni tar bilder och laddar upp
                under kvällen. Vi vill försöka fixa en dropbox eller liknande
                där ni kan ladda upp bilder ni tagit som ni tror vi skulle
                uppskatta. Mer info om detta kommer.
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
                  style={{ color: muiColors.deepOrange[500] }}
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
                Kontakta Matilda om du har frågor kring boende, transport, mat
                eller annan logistik.
              </Typography>
              <Typography variant={'body1'}>073-342 14 56</Typography>
            </SubSection>
          </Section>
        </PagePaper>
      </PageLayout>
    </StartWrapper>
  );
};
