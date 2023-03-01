import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

import {
  DateTimePicker,
  Input,
  BannerSelection,
  TagSelection,
  TextArea,
} from "@/components";

import {
  Logo,
  Date as DateLogo,
  Image as ImageLogo,
  Location,
  Money,
  People,
  Time,
} from "@/images";

import styles from "../styles/Home.module.css";
import CheckControl from "@/components/CheckControl";

type EventFormData = {
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
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventFormData>({
    defaultValues: {
      title: "Untitled Event",
      startAt: new Date(),
      venue: "",
      capacity: 0,
      price: 0,
      description: "",
      banner: "",
      tags: [],
      isManualApprove: false,
      privacy: "public",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
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
                <div>
                  <TextArea
                    className="form-control title"
                    style={{ height: "74px" }}
                    {...register("title")}
                  />
                </div>

                <div className="mt-1 g-3 row">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <Image
                          width={33}
                          height={33}
                          alt="ico-date"
                          src={DateLogo}
                        />
                      </div>
                      <div className="flex-grow-1 my-auto ms-3">
                        <Controller
                          name="startAt"
                          control={control}
                          render={({ field }) => <DateTimePicker {...field} />}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="d-flex">
                        <Image
                          width={33}
                          height={33}
                          alt="ico-time"
                          src={Time}
                        />
                      </div>
                      <div className="flex-grow-1 my-auto ms-3">
                        <Controller
                          name="startAt"
                          control={control}
                          render={({ field }) => <DateTimePicker {...field} />}
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
                            render={({ field }) => (
                              <Input placeholder="Venue" {...field} />
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
                          render={({ field }) => (
                            <Input
                              placeholder="Max capacity"
                              type="number"
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
                    Description *
                  </label>

                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        className="form-control"
                        style={{ height: "140px" }}
                        placeholder="Description of your event..."
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="mt-3">
                  <section className="Settingstyles__SettingWrapper-sc-w67phz-0 dQNRSJ">
                    <div className="FormSocialstyles__CardForm-sc-my60xn-2 jfUmJp card">
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
                                  id="unlimited"
                                  type="radio"
                                  label="Public"
                                  value="unlimited"
                                  constainerClass="p-0"
                                  {...register("privacy")}
                                />
                                <CheckControl
                                  id="one"
                                  type="radio"
                                  label="Curated Audience"
                                  value="one"
                                  constainerClass="p-0"
                                  {...register("privacy")}
                                />
                                <CheckControl
                                  id="specific"
                                  type="radio"
                                  label="Community Only"
                                  value="specific"
                                  constainerClass="p-0"
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
                              render={({ field }) => (
                                <TagSelection
                                  tags={["social", "food", "drink"]}
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
                        className="text-purple w-100 btn btn-primary"
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
                  render={({ field }) => (
                    <BannerSelection
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
