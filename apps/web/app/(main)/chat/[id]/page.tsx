import { getOrCreateConversation } from "@/actions/chat";
import NotFound from "@/app/not-found";
import ChatLayout from "./_components/chat-layout";
import { currentUser, getCurrentUser } from "@/actions/user";

export default async function ChatPage({ params, searchParams }: { params: { id: string }; searchParams: { carId: string } }) {
  const { id: dealerId } = await params;
  const { carId } = await searchParams;
  const result = await getOrCreateConversation(dealerId, carId);
  const user = await currentUser();

  if (!carId) {
    return <NotFound />;
  }
  if (!result.success || !result.data) {
    return <div className="p-8 text-center">Something went wrong. try laterr</div>;
  }
  if (!user) {
    return <div className="p-8 text-center">Unauthorized</div>;
  }

  const { id: conversationId } = result.data;
  

  return <ChatLayout carId={carId} dealerId={dealerId} conversationId={conversationId} currentUserId={user.id} />;
}
