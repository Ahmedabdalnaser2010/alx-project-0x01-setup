import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Email:</span> {email}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Phone:</span> {phone}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Website:</span> {website}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {company.name}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {company.catchPhrase}
                </span>
            </div>
        </div>
    );
};

export default UserCard;