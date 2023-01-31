import Image from "next/image";
import { useRouter } from "next/router";
import DefaultBtn from "../components/UI/Buttons/DefoultBtn/DefaultBtn";
import bg from "./../public/img/mario.gif";
const Error404 = () => {
    const route = useRouter();
    const toMain = () => {
        route.replace("/");
    };
    return (
        <div>
            <div className="Container min-h-screen flex pt-[2%] items-center h-full flex-col relative">
                <div className="relative z-10 flex flex-col justify-center items-center backdrop-blur-lg p-4 text-white">
                    <h2 className="md:text-7xl text-4xl font-mono text-center  ">
                        Game over
                    </h2>
                    <div>
                        <svg
                            height="280px"
                            width="280px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                style={{ fill: "#4E5058" }}
                                d="M123.954,206.805c-4.572,0-8.276-3.705-8.276-8.276v-44.874c0-24.033,19.553-43.586,43.586-43.586
	h166.253c14.908,0,27.034-12.128,27.034-27.034V66.85c0-4.57,3.704-8.276,8.276-8.276s8.276,3.705,8.276,8.276v16.184
	c0,24.033-19.553,43.586-43.586,43.586H159.264c-14.908,0-27.034,12.128-27.034,27.034v44.874
	C132.23,203.1,128.525,206.805,123.954,206.805z"
                            />
                            <path
                                style={{ fill: "#D3D3D5" }}
                                d="M503.172,453.426H8.828c-4.875,0-8.828-3.953-8.828-8.828V197.426c0-4.875,3.953-8.828,8.828-8.828
	h494.345c4.875,0,8.828,3.953,8.828,8.828v247.172C512,449.473,508.047,453.426,503.172,453.426z"
                            />
                            <path
                                style={{ fill: "#BDBDC0" }}
                                d="M22.069,435.77c-2.438,0-4.414-1.976-4.414-4.414V188.598H8.828c-4.875,0-8.828,3.953-8.828,8.828
	v247.172c0,4.875,3.953,8.828,8.828,8.828h494.345c4.875,0,8.828-3.953,8.828-8.828v-8.828H22.069z"
                            />
                            <path
                                style={{ fill: "#909296" }}
                                d="M220.69,294.529v-70.621c0-4.875-3.953-8.828-8.828-8.828H35.31c-4.875,0-8.828,3.953-8.828,8.828
	v194.207c0,4.875,3.953,8.828,8.828,8.828H220.69h256c4.875,0,8.828-3.953,8.828-8.828V303.357c0-4.875-3.953-8.828-8.828-8.828
	H220.69z"
                            />
                            <path
                                style={{ fill: "#4E5058" }}
                                d="M176.552,294.529h-26.483v-26.483c0-4.875-3.953-8.828-8.828-8.828h-35.31
	c-4.875,0-8.828,3.953-8.828,8.828v26.483H70.621c-4.875,0-8.828,3.953-8.828,8.828v35.31c0,4.875,3.953,8.828,8.828,8.828h26.483
	v26.483c0,4.875,3.953,8.828,8.828,8.828h35.31c4.875,0,8.828-3.953,8.828-8.828v-26.483h26.483c4.875,0,8.828-3.953,8.828-8.828
	v-35.31C185.379,298.481,181.427,294.529,176.552,294.529z"
                            />
                            <g>
                                <circle
                                    style={{ fill: "#FD8EB4" }}
                                    cx="353.103"
                                    cy="365.153"
                                    r="26.483"
                                />
                                <circle
                                    style={{ fill: "#FD8EB4" }}
                                    cx="423.724"
                                    cy="365.153"
                                    r="26.483"
                                />
                            </g>
                            <path
                                style={{ fill: "#E9E9EA" }}
                                d="M370.759,285.702H238.345c-4.875,0-8.828-3.953-8.828-8.828v-52.966c0-4.875,3.953-8.828,8.828-8.828
	h132.414c4.875,0,8.828,3.953,8.828,8.828v52.966C379.586,281.749,375.634,285.702,370.759,285.702z"
                            />
                            <g>
                                <path
                                    style={{ fill: "#BDBDC0" }}
                                    d="M432.552,249.839h-35.31c-4.572,0-8.276-3.705-8.276-8.276s3.704-8.276,8.276-8.276h35.31
		c4.572,0,8.276,3.705,8.276,8.276S437.123,249.839,432.552,249.839z"
                                />
                                <path
                                    style={{ fill: "#BDBDC0" }}
                                    d="M459.034,249.839h-8.828c-4.572,0-8.276-3.705-8.276-8.276s3.704-8.276,8.276-8.276h8.828
		c4.572,0,8.276,3.705,8.276,8.276S463.606,249.839,459.034,249.839z"
                                />
                                <path
                                    style={{ fill: "#BDBDC0" }}
                                    d="M459.034,276.322h-17.655c-4.572,0-8.276-3.705-8.276-8.276s3.704-8.276,8.276-8.276h17.655
		c4.572,0,8.276,3.705,8.276,8.276S463.606,276.322,459.034,276.322z"
                                />
                                <path
                                    style={{ fill: "#BDBDC0" }}
                                    d="M423.724,276.322h-26.483c-4.572,0-8.276-3.705-8.276-8.276s3.704-8.276,8.276-8.276h26.483
		c4.572,0,8.276,3.705,8.276,8.276S428.296,276.322,423.724,276.322z"
                                />
                            </g>
                            <g>
                                <path
                                    style={{ fill: "#64666D" }}
                                    d="M291.31,356.322h-17.655c-4.572,0-8.276,3.705-8.276,8.276c0,4.57,3.704,8.276,8.276,8.276h17.655
		c4.572,0,8.276-3.705,8.276-8.276C299.586,360.028,295.882,356.322,291.31,356.322z"
                                />
                                <path
                                    style={{ fill: "#64666D" }}
                                    d="M247.172,356.322h-17.655c-4.572,0-8.276,3.705-8.276,8.276c0,4.57,3.704,8.276,8.276,8.276h17.655
		c4.572,0,8.276-3.705,8.276-8.276C255.448,360.028,251.744,356.322,247.172,356.322z"
                                />
                            </g>
                        </svg>
                    </div>
                    <h2 className="text-4xl font-mono text-center my-4">
                        Error 404
                    </h2>
                    <p className="text-center mb-4">Something goes wrong...</p>

                    <DefaultBtn fn={toMain}>Повернутися до головної</DefaultBtn>
                </div>
            </div>
            <Image
                src={bg}
                layout="fill"
                alt="бекграунд"
                objectFit="cover"
                className="absolute"
            />
        </div>
    );
};

export default Error404;