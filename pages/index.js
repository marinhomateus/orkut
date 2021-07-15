import MainGrid from "./../src/components/MainGrid";
import Box from "./../src/components/Box";

function ProfileSideBar(user) {
  
  return (
    <Box>
      <img src={`https://github.com/${user.githubUser}.png`} alt="Mateus Marinho" />
      {/*to use a variable on react we need to apply that syntax*/}
    </Box>
  );
}

export default function Home() {
  const user = "marinhomateus";

  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}>
        <ProfileSideBar githubUser={user} />
      </div>
      <div className="timelineArea" style={{ gridArea: "timelineArea" }}>
        <Box>Timeline</Box>
        <Box>Timeline</Box>
      </div>
      <div className="comunityArea" style={{ gridArea: "comunityArea" }}>
        <Box>Comunity</Box>
        <Box>Comunity</Box>
      </div>
    </MainGrid>
  );
}
