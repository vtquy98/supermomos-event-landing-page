import axios from "axios";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import Head from "next/head";

import {
  BannerSelection,
  DateTimePicker,
  Input,
  TagSelection,
  TextArea,
} from "@/components";
import {
  Date as DateLogo,
  Location,
  Logo,
  Money,
  People,
  Time,
} from "@/images";
import CheckControl from "@/components/CheckControl";

import styles from "../styles/Home.module.css";

type FormData = {
  title: string;
  startDate: string;
  startTime: string;
  venue: string;
  capacity: number;
  price?: number;
  description: string;
  banner: string;
  tags: Array<string>;
  isManualApprove?: boolean;
  privacy: "Public" | "Curated Audience" | "Community Only" | "";
};

type CreateEventType = {
  title: string;
  startAt: Date;
  venue: string;
  capacity: number;
  price?: number;
  description: string;
  banner: string;
  tags: Array<string>;
  isManualApprove?: boolean;
  privacy: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "Untitled Event",
      startDate: Date().toString(),
      startTime: Date().toString(),
      venue: "",
      capacity: 0,
      price: 0,
      description: "",
      banner: "",
      tags: [],
      isManualApprove: false,
      privacy: "",
    },
  });

  const createNewEvent = async (data: CreateEventType) => {
    try {
      const response = await axios.post("/api/event", data);

      if (response.status === 200) {
        toast.success("Event created");
      }
    } catch (error: any) {
      toast.error("Can not create event");
    }
  };

  const onSubmit = handleSubmit((data) => {
    const formData: CreateEventType = {
      banner: data.banner,
      capacity: data.capacity,
      description: data.description,
      isManualApprove: data.isManualApprove,
      price: data.price,
      privacy: data.privacy,
      tags: data.tags,
      title: data.title,
      venue: data.venue,
      startAt: moment(
        `${moment(data.startDate).format("YYYY-MM-DD")} ${moment(
          data.startTime
        ).format("HH:mm")}`
      ).toDate(),
    };
    createNewEvent(formData);
  });

  return (
    <>
      <Head>
        <title>Create Event</title>
      </Head>

      <main className={styles.main}>
        <nav
          id="header"
          className="navbar navbar-expand-lg navbar-light bg-purple sticky-top"
        >
          <div className="position-relative container">
            <a className="navbar-brand">
              <Image src={Logo} alt="logo" width={200} height={36} />
            </a>
            <div
              className="navbar-collapse collapse"
              id="responsive-navbar-nav"
            >
              <div className="navbar-nav">
                <div className="nav-item">
                  <a className="nav-link active">Socials</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Past Socials</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Clubs</a>
                </div>
                <div className="nav-item"></div>
                <div className="nav-item">
                  <a className="nav-link">Featured Speakers</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-3 py-md-5 container">
          <form onSubmit={onSubmit} className="row 0">
            <div className="position-relative row-flex row">
              <div className="h-100 col-lg-6 col-md-12 col-sm-12 col-12">
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Title is required" }}
                  render={({ field }) => (
                    <TextArea
                      error={errors.title?.message}
                      className="form-control title"
                      style={{ height: "74px" }}
                      {...field}
                    />
                  )}
                />

                <div className="mt-1 g-3 row">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Image
                        width={33}
                        height={33}
                        alt="ico-date"
                        src={DateLogo}
                      />
                      <div className="flex-grow-1 my-auto ms-3">
                        <Controller
                          name="startDate"
                          control={control}
                          render={({ field }) => <DateTimePicker {...field} />}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <Image width={33} height={33} alt="ico-time" src={Time} />
                      <div className="flex-grow-1 my-auto ms-3">
                        <Controller
                          name="startTime"
                          control={control}
                          render={({ field }) => (
                            <DateTimePicker
                              {...field}
                              showTimeInput
                              showTimeSelectOnly
                              dateFormat="h:mm aa"
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="w-100 d-flex align-items-center">
                      <div className="d-flex" style={{ width: "24px" }}>
                        <Image
                          width={14}
                          height={18}
                          alt="ico-location"
                          src={Location}
                        />
                      </div>
                      <section className="flex-grow-1 ms-3 d-block">
                        <div className="my-auto">
                          <Controller
                            name="venue"
                            control={control}
                            rules={{ required: "Venue is required" }}
                            render={({ field }) => (
                              <Input
                                placeholder="Venue"
                                error={errors.venue?.message}
                                {...field}
                              />
                            )}
                          />
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="d-flex" style={{ width: "24px" }}>
                        <Image
                          width={18}
                          height={18}
                          alt="people"
                          src={People}
                        />
                      </div>
                      <div className="flex-grow-1 my-auto ms-3">
                        <Controller
                          name="capacity"
                          control={control}
                          rules={{ required: "Capacity is required" }}
                          render={({ field }) => (
                            <Input
                              placeholder="Max capacity"
                              type="number"
                              error={errors.capacity?.message}
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="d-flex" style={{ width: "24px" }}>
                        <Image
                          width={18}
                          height={18}
                          alt="currency"
                          src={Money}
                        />
                      </div>
                      <div className="flex-grow-1  my-auto ms-3 d-block">
                        <Controller
                          name="price"
                          control={control}
                          render={({ field }) => (
                            <Input
                              placeholder="Cost per person"
                              type="number"
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>

                  <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                      <TextArea
                        className="form-control"
                        style={{ height: "140px" }}
                        placeholder="Description of your event..."
                        error={errors.description?.message}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="mt-3">
                  <section>
                    <div className="card">
                      <div className="p-4">
                        <h2 className="heading-4 text-purple flex-grow-1">
                          <span className="bg-yellow px-3 py-1">Settings</span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="d-flex flex-wrap gap-3">
                          <div>
                            <CheckControl
                              type="checkbox"
                              id="isManualApprove"
                              label="I want to approve attendees"
                              className="form-check-input"
                              {...register("isManualApprove")}
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="form-label">Privacy</label>
                          <div>
                            <div className="d-block mb-2">
                              <div className="d-flex gap-4">
                                <CheckControl
                                  id="public"
                                  type="radio"
                                  label="Public"
                                  value="Public"
                                  {...register("privacy")}
                                />

                                <CheckControl
                                  id="curatedAudience"
                                  type="radio"
                                  label="Curated Audience"
                                  value="Curated Audience"
                                  {...register("privacy")}
                                />

                                <CheckControl
                                  id="communityOnly"
                                  type="radio"
                                  label="Community Only"
                                  value="Community Only"
                                  {...register("privacy")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="form-label">Tag your social</label>
                          <p>
                            Pick tags for our curation engine to work its magin
                          </p>
                          <div>
                            <Controller
                              name="tags"
                              control={control}
                              rules={{ required: "Tags is required" }}
                              render={({ field }) => (
                                <TagSelection
                                  error={errors.tags?.message}
                                  tags={["Product", "Marketing", "Design"]}
                                  value={field.value}
                                  onChange={(tags) => field.onChange(tags)}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="text-purple w-100 bg-yellow border-0 p-2 rounded-2"
                      >
                        CREATE SOCIAL
                      </button>
                    </div>
                  </section>
                </div>
              </div>
              <div className="h-100 col-lg-6 col-md-12 col-sm-12 col-12">
                <Controller
                  name="banner"
                  control={control}
                  rules={{ required: "Banner is required" }}
                  render={({ field }) => (
                    <BannerSelection
                      error={errors.banner?.message}
                      onChange={(pos) => field.onChange(pos)}
                      value={field.value}
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
