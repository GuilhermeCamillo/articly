import { auth } from "../../../../auth";
import SettingsForm from "./Form";

const Settings = async () => {
  const session = await auth();

  return (
    <main
      className="flex items-center justify-center bg-primary w-full"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <SettingsForm
        initialName={session?.user?.name}
        initialLastName={session?.user?.lastName}
      />
    </main>
  );
};

export default Settings;
