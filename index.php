<?php include('perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content homepage-main-content" id="main-content">
  <?php perch_content("Section One"); ?>
  <?php perch_content("Section Two"); ?>
  <?php perch_content("Parallax Image"); ?>
  <?php perch_content("Testimonials"); ?>
  <?php perch_content("Contact Form"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('homepage-footer-end-js'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->

