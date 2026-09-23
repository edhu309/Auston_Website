from rest_framework.permissions import BasePermission


class IsAdminUser(BasePermission):
    """
    Allows access only to authenticated staff/admin users.
    """

    message = "You must be an admin user to perform this action."

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
        )


class IsAdminOrCreateOnly(BasePermission):
    """
    Public users can create enquiries.
    Only staff/admin users can view, update, or delete enquiries.
    """

    message = "You must be an admin user to access enquiries."

    def has_permission(self, request, view):
        if request.method == "POST":
            return True

        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
        )