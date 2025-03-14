"use client";
import React, { useEffect, useState } from "react";
import trouble from "@/public/assets/trouble.svg";
import explore_packages from "@/public/assets/explore_packages.svg";
import Image from "next/image";
import Forselltab from "./tabs/Forselltab";
import Forrenttab from "./tabs/Forrenttab";
import Forcommercial from "./tabs/Forcommercial";
import { useUserDetails } from "../zustand/useUserDetails";
import { useRouter } from "next/navigation";
import Packagesapi from "../api/Packagesapi";
import { Modal } from "@nayeshdaggula/tailify";
import Errorpanel from "../shared/Errorpanel";
import PricingCards from "./tabs/PricingCards";

function Packagestabswrapper() {
  const [activetab, setActivetab] = useState("forselltab");
  const updateActiveTab = (value) => {
    setActivetab(value);
    if (value === "forselltab" && sellPackages.length === 0)
      getSellPackagesData();
    if (value === "forrenttab" && rentPackages.length === 0)
      getRentPackagesData();
    if (value === "forcommercial" && commercialPackages.length === 0)
      getCommercialPackagesData();
  };
  const router = useRouter();
  const userInfo = useUserDetails((state) => state.userInfo);

  const isLogged = useUserDetails((state) => state.isLogged);
  const access_token = useUserDetails((state) => state.access_token);

  const [isLoadingEffect, setIsLoadingEffect] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  const [sellPackages, setSellPackages] = useState([]);
  async function getSellPackagesData() {
    setIsLoadingEffect(true);
    Packagesapi.get("/getsellpackages", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        let data = response.data;
        if (data.status === "error") {
          let finalresponse = {
            message: data.message,
            server_res: data,
          };
          setErrorMessages(finalresponse);
          setErrorModalOpen(true);
          setIsLoadingEffect(false);
          return false;
        }
        setSellPackages(data?.packages);
        setIsLoadingEffect(false);
        return false;
      })
      .catch((error) => {
        console.log(error);
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            message: error.message,
            server_res: error.response.data,
          };
        } else {
          finalresponse = {
            message: error.message,
            server_res: null,
          };
        }
        setErrorMessages(finalresponse);
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
        return false;
      });
  }
  const [rentPackages, setRentPackages] = useState([]);
  const [plans, setPlans] = useState([]);

  async function getRentPackagesData() {
    setIsLoadingEffect(true);
    Packagesapi.get("/getrentpackages", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        let data = response.data;
        if (data.status === "error") {
          let finalresponse = {
            message: data.message,
            server_res: data,
          };
          setErrorMessages(finalresponse);
          setErrorModalOpen(true);
          setIsLoadingEffect(false);
          return false;
        }
        setRentPackages(data?.packages);
        setIsLoadingEffect(false);
        return false;
      })
      .catch((error) => {
        console.log(error);
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            message: error.message,
            server_res: error.response.data,
          };
        } else {
          finalresponse = {
            message: error.message,
            server_res: null,
          };
        }
        setErrorMessages(finalresponse);
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
        return false;
      });
  }
  const [commercialPackages, setCommercialPackages] = useState([]);
  async function getCommercialPackagesData() {
    setIsLoadingEffect(true);
    Packagesapi.get("/getcommercialpackages", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        let data = response.data;
        if (data.status === "error") {
          let finalresponse = {
            message: data.message,
            server_res: data,
          };
          setErrorMessages(finalresponse);
          setErrorModalOpen(true);
          setIsLoadingEffect(false);
          return false;
        }
        setCommercialPackages(data?.packages);
        setIsLoadingEffect(false);
        return false;
      })
      .catch((error) => {
        console.log(error);
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            message: error.message,
            server_res: error.response.data,
          };
        } else {
          finalresponse = {
            message: error.message,
            server_res: null,
          };
        }
        setErrorMessages(finalresponse);
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
        return false;
      });
  }

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoadingEffect(true);

      setPlans([]);
      try {
        const response = await fetch(
          `http://43.204.108.167:5001/api/${activetab}`
        );
        const data = await response.json();
        if (data.success) {
          setPlans(data.data);
        } else {
          throw new Error("Failed to fetch plans");
        }
      } catch (error) {
      } finally {
        setIsLoadingEffect(false);
      }
    };
    fetchPlans();
    getSellPackagesData();
  }, [activetab]);
  return (
    <>
      <div className="flex flex-col gap-6 px-6 bg-[#ffffff] rounded-bl-[10px] rounded-br-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-4 mt-4 md:mt-8 gap-3 md:gap-0">
          <p className="text-[22px] xs:text-[26px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] text-[#699BA0] font-[700]">
            GET 30% off Valid Till
            <span className="block text-center text-[#116D85]">
              AUG - 15TH - 2025
            </span>
          </p>
          <div className="flex">
            <button
              onClick={() => updateActiveTab("forselltab")}
              className={`h-8 rounded-l-full text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-[600] text-center px-6 transition-colors 
      ${
        activetab === "forselltab"
          ? "bg-[#F0F0F0] text-[#1D3A76] border border-[#1D3A76]"
          : "text-[#909090] border border-[#8F9194]"
      }`}
            >
              For sell
            </button>

            <button
              onClick={() => updateActiveTab("forrenttab")}
              className={`h-8 text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-center font-[600] px-6 transition-colors 
      ${
        activetab === "forrenttab"
          ? "bg-[#F0F0F0] text-[#1D3A76] border border-[#1D3A76]"
          : "text-[#909090] border border-[#8F9194]"
      }`}
            >
              For Rent
            </button>

            <button
              onClick={() => updateActiveTab("forcommercial")}
              className={`h-8 rounded-r-full text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-center font-[600] px-6 transition-colors 
      ${
        activetab === "forcommercial"
          ? "bg-[#F0F0F0] text-[#1D3A76] border border-[#1D3A76]"
          : "text-[#909090] border border-[#8F9194]"
      }`}
            >
              For commercial
            </button>
          </div>
        </div>

        <PricingCards
          isLoadingEffect={isLoadingEffect}
          plans={plans}
          userInfo={userInfo}
        />

        <div className="flex flex-row w-fit gap-4 pb-8">
          <div className=" cursor-pointer  flex flex-col  items-center justify-center border-[1.5px] border-[#699BA0] rounded-[10px] px-3 pb-1 ">
            <Image src={trouble} alt={"trouble"} className="object-cover p-2" />
            <p className="text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-bold text-[#699BA0]">
              Explore Commercial Pakages
            </p>
          </div>
          <div className=" cursor-pointer  flex flex-col  items-center justify-center border-[1.5px] border-[#699BA0] rounded-[10px] px-3 pb-1 ">
            <Image
              src={explore_packages}
              alt={"explore_packages"}
              className="object-cover p-2"
            />
            <p className="text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] font-bold text-[#699BA0]">
              Having a Trouble? Request a callback
            </p>
          </div>
        </div>
      </div>
      {errorModalOpen && (
        <Modal
          open={errorModalOpen}
          onClose={closeErrorModal}
          size="md"
          zIndex={9999}
        >
          <Errorpanel errorMessages={errorMessages} close={closeErrorModal} />
        </Modal>
      )}
    </>
  );
}

export default Packagestabswrapper;
