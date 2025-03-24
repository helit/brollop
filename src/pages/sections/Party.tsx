import { Typography } from '@mui/material';
import { Section } from '../../components/Section/Section';

export const Party = () => {
  return (
    <>
      <Section title={'Festen'}>
        <Typography variant={'body1'}>
          Festen kommer äga rum hemma i vår trädgård på adress Tofta 166, 442 75
          Lycke, 4 km med bil från Lycke kyrka.
        </Typography>
        <Typography variant={'body1'}>
          Då parkeringplatser är begränsade i nära anslutning till huset, ber vi
          er med raska ben att parkera vid Stall Tofta vid Tofta herrgård och
          promenera 20 minuter (1,5km) hem till oss.
        </Typography>
        <Typography variant={'body1'}>
          Ni med mindre raska ben kan parkera lite närmare på olika platser i
          närheten i mån av plats. Annars kan vi säkert skicka en bil som kan
          plocka upp er vid herrgården.
        </Typography>
        <Typography variant={'h5'} fontFamily={'Charm'}>
          Boende
        </Typography>
        <Typography variant={'body1'}>
          Till er som tänkt övernatta. Mer information kommer inom kort då vi
          försöker lösa denna logistik. Hör gärna av er till oss om ni behöver
          snabbare svar eller har frågor om detta.
        </Typography>
      </Section>
      <Section title="Kan jag hjälpa till?">
        <Typography variant={'body1'}>
          Vi vill ha hjälp med saker, roliga idéer, hör av dig om du vill bidra.
        </Typography>
      </Section>
      <Section title="Klädsel">
        <Typography variant={'body1'}>Ta på dig nåt fint.</Typography>
      </Section>
    </>
  );
};
