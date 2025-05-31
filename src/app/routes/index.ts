import express from "express";
import { AcademicDeptRoutes } from "../modules/academicDept/academicDept.routes";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { AcademicSemRoutes } from "../modules/academicSem/academicSem.routes";
import { BuildingRoutes } from "../modules/building/building.routes";
import { CourseRoutes } from "../modules/course/course.routes";
import { ManagementDeptRoutes } from "../modules/managementDept/managementDept.routes";
import { OfferedCourseRoutes } from "../modules/offeredCourse/offeredCourse.routes";
import { OfferedCourseScheduleRoutes } from "../modules/offeredCourseSchedule/offeredCourseSchedule.routes";
import { OfferedCourseSectionRoutes } from "../modules/offeredCourseSection/offeredCourseSection.routes";
import { RoomRoutes } from "../modules/room/room.routes";
import { SemRegistrationRoutes } from "../modules/semRegistration/semRegistration.routes";
import { StudentEnrolledCourseRoutes } from "../modules/studentEnrolledCourse/studentEnrolledCourse.routes";
import { StudentEnrolledCourseMarkRoutes } from "../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes";
import { StudentSemPaymentRoutes } from "../modules/studentSemPayment/studentSemPayment.routes";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-departments",
    route: AcademicDeptRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemRoutes,
  },
  {
    path: "/buildings",
    route: BuildingRoutes,
  },
  {
    path: "/rooms",
    route: RoomRoutes,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/semester-registrations",
    route: SemRegistrationRoutes,
  },
  {
    path: "/offered-courses",
    route: OfferedCourseRoutes,
  },
  {
    path: "/offered-course-sections",
    route: OfferedCourseSectionRoutes,
  },
  {
    path: "/offered-course-class-schedules",
    route: OfferedCourseScheduleRoutes,
  },
  {
    path: "/student-enrolled-courses",
    route: StudentEnrolledCourseRoutes,
  },
  {
    path: "/student-enrolled-course-marks",
    route: StudentEnrolledCourseMarkRoutes,
  },
  {
    path: "/student-semester-payments",
    route: StudentSemPaymentRoutes,
  },
  {
    path: "/management-departments",
    route: ManagementDeptRoutes,
  },
];

moduleRoutes.forEach((r) => {
  router.use(r.path, r.route);
});

export default router;
