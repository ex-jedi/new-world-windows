<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content services-main-content" id="main-content">
     <?php perch_blog_recent_posts(5); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('general-footer-end-js'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->

