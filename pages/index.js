import MainGrid from "./../src/components/MainGrid";
import Box from "./../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/Comunity";

function ProfileSideBar(user) {
  return (
    <Box>
      <img
        src={`https://github.com/${user.githubUser}.png`}
        alt="Mateus Marinho"
      />
      {/*to use a variable on react we need to apply that syntax*/}
    </Box>
  );
}

export default function Home() {
  const githubUser = "marinhomateus";

  const people = [
    "peas",
    "microsoft",
    "facebook",
    "felipefialho",
    "marcobrunodev",
    "marinhomateus",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="timelineArea" style={{ gridArea: "timelineArea" }}>
          <Box>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>Timeline</Box>
        </div>
        <div className="comunityArea" style={{ gridArea: "comunityArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({people.length})
            </h2>
            <ul>
              {people.map((currentUser) => {
                return (
                  <li>
                    <a href={`/users/${currentUser}`} key={currentUser}>
                      <img src={`https://github.com/${currentUser}.png`} alt="Pessoas" />
                      <span>{currentUser}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunity</Box>
        </div>
      </MainGrid>
    </>
  );
}
