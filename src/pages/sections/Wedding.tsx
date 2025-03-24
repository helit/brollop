import { Typography, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Section/Section';
import church from '../../assets/lycke-ka-akvarell.png';
import { useTabs } from '../../hooks/useTabs';

export const Wedding = () => {
  const { setActiveTab } = useTabs();

  return (
    <Section title={'Vigseln'}>
      <img src={church} style={{ width: '100%' }} />
      <Typography variant={'body1'}>
        {`Vigseln kommer äga rum kl 12:00 den 19 juli i Lycke Kyrka på adressen Stora Lycke 350, 442 75 Lycke.`}
      </Typography>
      <Typography variant={'body1'}>
        <Link
          to={
            'https://www.google.se/maps/place/Lycke+kyrka/@57.8754621,11.7208269,17z/data=!3m1!4b1!4m6!3m5!1s0x464562d5922ed717:0x24a16062ecf9a063!8m2!3d57.8754621!4d11.7208269!16s%2Fg%2F11dylt3t1?hl=sv&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
          }
          style={{ color: colors.amber[700] }}
        >
          Hitta via google maps
        </Link>
      </Typography>
      <Typography variant={'body1'}>
        Vigseln är öppen och kräver ingen anmälan, men vill du komma på festen
        efteråt behöver du anmäla dig{' '}
        <Link
          to={'/anmalan'}
          onClick={() => setActiveTab(1)}
          style={{ color: colors.amber[700] }}
        >
          här
        </Link>
        .
      </Typography>
      <Typography variant={'h5'} fontFamily={'Charm'}>
        Buss & tåg
      </Typography>
      <Typography variant={'body1'}>
        Om du åker kollektivt, sök på västtrafiks hemsida till hållplats Lycke,
        Kungälv.
      </Typography>
      <Typography variant={'h5'} fontFamily={'Charm'}>
        Bil
      </Typography>
      <Typography variant={'body1'}>
        Om du reser med bil, parkera bilen på kyrkans parkering
      </Typography>
    </Section>
  );
};
