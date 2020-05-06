import goroth from '../assets/bosses/tomb/Goroth.jpg'
import demonic from '../assets/bosses/tomb/Demonic.jpg'
import host from '../assets/bosses/tomb/Host.jpg'
import harjatan from '../assets/bosses/tomb/Harjatan.jpg'
import sisters from '../assets/bosses/tomb/Sisters.jpg'
import mistress from '../assets/bosses/tomb/Mistress.jpg'
import maiden from '../assets/bosses/tomb/Maiden.jpg'
import avatar from '../assets/bosses/tomb/Avatar.jpg'
import kiljaeden from '../assets/bosses/tomb/Kiljaeden.jpg'

import garothi from '../assets/bosses/antorus/garothi.jpg'
import felhounds from '../assets/bosses/antorus/felhounds.jpg'
import highcommand from '../assets/bosses/antorus/highcommand.jpg'
import hasabel from '../assets/bosses/antorus/hasabel.jpg'
import eonar from '../assets/bosses/antorus/eonar.jpg'
import imonar from '../assets/bosses/antorus/imonar.jpg'
import kingaroth from '../assets/bosses/antorus/kingaroth.jpg'
import varimathras from '../assets/bosses/antorus/varimathras.jpg'
import coven from '../assets/bosses/antorus/coven.jpg'
import aggramar from '../assets/bosses/antorus/aggramar.jpg'
import argus from '../assets/bosses/antorus/argus.jpg'

import taloc from '../assets/bosses/uldir/taloc.jpg'
import mother from '../assets/bosses/uldir/mother.jpg'
import fetid from '../assets/bosses/uldir/fetid.jpg'
import zekvoz from '../assets/bosses/uldir/zekvoz.jpg'
import vectis from '../assets/bosses/uldir/vectis.jpg'
import zul from '../assets/bosses/uldir/zul.jpg'
import mythrax from '../assets/bosses/uldir/mythrax.jpg'
import ghuun from '../assets/bosses/uldir/ghuun.jpg'

export default [
  {
    name: 'Uldir',
    expansion: 'Battle for Azeroth',
    bosses: [
      { name: `Taloc the Corrupted`, image: taloc, killed: { normal: true, heroic: true, mythic: false } },
      { name: `MOTHER`, image: mother, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Fetid Devourer`, image: fetid, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Zek'voz, Herald of N'zoth`, image: zekvoz, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Vectis`, image: vectis, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Zul, Reborn`, image: zul, killed: { normal: true, heroic: false, mythic: false }  },
      { name: `Mythrax the Unraveler`, image: mythrax, killed: { normal: true, heroic: false, mythic: false }  },
      { name: `G'huun`, image: ghuun, killed: { normal: true, heroic: false, mythic: false }  },
    ]
  },
  {
    name: 'Antorus, the Burning Throne',
    expansion: 'Legion' ,
    bosses: [
      { name: `Garothi Worldbreaker`, image: garothi, killed: { normal: true, heroic: true, mythic: false } },
      { name: `Felhounds of Sargeras`, image: felhounds, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Antoran High Command`, image: highcommand, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Portal Keeper Hasabel`, image: hasabel, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Eonar the Life-Binder`, image: eonar, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Imonar the Soulhunter`, image: imonar, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Kin'garoth`, image: kingaroth, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Varimathras`, image: varimathras, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `The Coven of Shivarra`, image: coven, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Aggramar`, image: aggramar, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Argus the Unmaker`, image: argus, killed: { normal: true, heroic: true, mythic: false }  },
    ]
  },
  {
    name: 'Tomb of Sargeras',
    expansion: 'Legion',
    bosses: [
      { name: `Goroth`, image: goroth, killed: { normal: true, heroic: true, mythic: false } },
      { name: `Demonic Inquisition`, image: demonic, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Harjatan`, image: harjatan, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Sisters of the Moon`, image: sisters, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Mistress Sassz'ine`, image: mistress, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `The Desolate Host`, image: host, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Maiden of Vigilance`, image: maiden, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Fallen Avatar`, image: avatar, killed: { normal: true, heroic: true, mythic: false }  },
      { name: `Kil'jaeden`, image: kiljaeden, killed: { normal: true, heroic: true, mythic: false }  },
    ]
  },
]
